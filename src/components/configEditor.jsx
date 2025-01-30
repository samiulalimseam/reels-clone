import React, { useState, useEffect } from "react";
import "./configEditor.css";
import VidoeCarousel from "./VidoeCarousel";

// Backend URL to update the config
const backendURL = "http://localhost:5000"; // Adjust based on your backend setup

const ConfigEditor = () => {
  const [loading, setLoading] = useState(false);
  const [configData, setConfigData] = useState(null);
  const property = configData?.UGCVideoManager_template_1
  const api_url = window.Shopify ? "https://cdn.shopify.com/s/files/1/0662/8199/6426/files/config.json" : backendURL + "/data/config.json"

  // Load the config data when the component mounts
  useEffect(() => {
    setLoading(true);
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setConfigData(data))
      .catch((err) => console.error("Failed to load config.json", err))
      .finally(() => setLoading(false));
  }, []);

  // Handle input changes and update the state
  const handleChange = (e, path) => {
    const newConfigData = { ...configData };
    const keys = path.split('.');
    let obj = newConfigData;

    // Traverse the path and update the value
    keys.slice(0, -1).forEach((key) => {
      obj = obj[key];
    });

    obj[keys[keys.length - 1]] = e.target.value;
    setConfigData(newConfigData);
  };

  // Handle the update button click to send the updated config to the server
  const handleUpdateConfig = () => {
    fetch(backendURL + "/update-config", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(configData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Config updated successfully:", data);
        alert("Configuration updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating config:", error);
        alert("Failed to update config.");
      });
  };

  // Render the form with editable fields based on the config data
  if (!configData || loading) {
    return <div>Loading...</div>;
  }

  // Destructure configData for easier access
  const {
    UGCVideoManager_template_1: {
      webpage: {
        content: {
          general: { title, showTitle },
          videoContent: { type, videos },
          galleryLayout: { layout },
          videoBehavior: { showAutoPlay, showVideosShoppable, showStartOnMute },
        },
        style: {
          general: { alignment, titleColor, titleFontFamily, titleFontSize, titleFontWeight },
          video: { width, height, videoBorderType, videoBorderRadius },
          playIcon: { iconSize, iconColor, playIconBackgroundType, playIconBackgroundColor, playIconBorderType },
        },
        advance: {
          devices: { showOnMobile, showOnTablet, showOnDesktop },
        },
      },
    },
  } = configData;
  const isShopify = window.Shopify
  if (isShopify) {
    return <VidoeCarousel property={property} />
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <aside style={{
        width: '20%',
      }}>
        <div className="config-editor">
          <h2>Config Editor</h2>
          <form>
            {/* General Section */}
            <div>
              <label>
                Title:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.webpage.content.general.title")}
                />
              </label>
            </div>
            <div>
              <label>
                Show Title:
                <input
                  type="checkbox"
                  checked={showTitle}
                  onChange={(e) =>
                    handleChange(e, "UGCVideoManager_template_1.webpage.content.general.showTitle")
                  }
                />
              </label>
            </div>

            {/* Video Content Section */}
            <div>
              <label>
                Video Content Type:
                <input
                  type="text"
                  value={type}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.webpage.content.videoContent.type")}
                />
              </label>
            </div>
            <div>
              <label>
                Videos:
                <textarea
                  value={JSON.stringify(videos)}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.webpage.content.videoContent.videos")}
                />
              </label>
            </div>

            {/* Gallery Layout Section */}
            <div>
              <label>
                Gallery Layout:
                <input
                  type="text"
                  value={layout}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.webpage.content.galleryLayout.layout")}
                />
              </label>
            </div>

            {/* Video Behavior Section */}
            <div>
              <label>
                Show AutoPlay:
                <input
                  type="checkbox"
                  checked={showAutoPlay}
                  onChange={(e) =>
                    handleChange(e, "UGCVideoManager_template_1.webpage.content.videoBehavior.showAutoPlay")
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Show Videos Shoppable:
                <input
                  type="checkbox"
                  checked={showVideosShoppable}
                  onChange={(e) =>
                    handleChange(e, "UGCVideoManager_template_1.webpage.content.videoBehavior.showVideosShoppable")
                  }
                />
              </label>
            </div>
            <div>
              <label>
                Show Start On Mute:
                <input
                  type="checkbox"
                  checked={showStartOnMute}
                  onChange={(e) =>
                    handleChange(e, "UGCVideoManager_template_1.webpage.content.videoBehavior.showStartOnMute")
                  }
                />
              </label>
            </div>

            {/* Player Settings Section */}
            <div>
              <label>
                Player View Mode:
                <input
                  type="text"
                  value={configData?.UGCVideoManager_template_1?.webpage?.content?.playerSettings?.playerViewMode}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.webpage.content.playerSettings.playerViewMode")}
                />
              </label>
            </div>
            <div>
              <label>
                Player Position:
                <input
                  type="text"
                  value={configData?.UGCVideoManager_template_1?.webpage?.content?.playerSettings?.playerPosition}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.webpage.content.playerSettings.playerPosition")}
                />
              </label>
            </div>
            <div>
              <label>
                Show Transparent Layer:
                <input
                  type="checkbox"
                  checked={configData?.UGCVideoManager_template_1?.webpage?.content?.playerSettings?.showTransparentLayer}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.webpage.content.playerSettings.showTransparentLayer")}
                />
              </label>
            </div>
            <div>
              <label>
                Opacity:
                <input
                  type="text"
                  value={configData?.UGCVideoManager_template_1?.webpage?.content?.playerSettings?.opacity}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.webpage.content.playerSettings.opacity")}
                />
              </label>
            </div>
            <div>
              <label>
                Show Auto Scroll To Nest Video:
                <input
                  type="checkbox"
                  checked={configData?.UGCVideoManager_template_1?.webpage?.content?.playerSettings?.showAutoScrollToNestVideo}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.webpage.content.playerSettings.showAutoScrollToNestVideo")}
                />
              </label>
            </div>

            {/* Play Icon Section */}
            <div>
              <label>
                Show Play Icon:
                <input
                  type="checkbox"
                  checked={configData?.UGCVideoManager_template_1?.webpage?.content?.playIcon?.showPlayIcon}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.webpage.content.playIcon.showPlayIcon")}
                />
              </label>
            </div>
            <div>
              <label>
                Upload Icon:
                <input
                  type="text"
                  value={configData?.UGCVideoManager_template_1?.webpage?.content?.playIcon?.uploadIcon}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.webpage.content.playIcon.uploadIcon")}
                />
              </label>
            </div>

            {/* Style Section */}
            <div>
              <label>
                Alignment:
                <input
                  type="text"
                  value={alignment}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.style.general.alignment")}
                />
              </label>
            </div>
            <div>
              <label>
                Title Color:
                <input
                  type="text"
                  value={titleColor}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.style.general.titleColor")}
                />
              </label>
            </div>
            <div>
              <label>
                Title Font Family:
                <input
                  type="text"
                  value={titleFontFamily}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.style.general.titleFontFamily")}
                />
              </label>
            </div>
            <div>
              <label>
                Title Font Size:
                <input
                  type="text"
                  value={titleFontSize}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.style.general.titleFontSize")}
                />
              </label>
            </div>
            <div>
              <label>
                Title Font Weight:
                <input
                  type="text"
                  value={titleFontWeight}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.style.general.titleFontWeight")}
                />
              </label>
            </div>

            {/* Video Section */}
            <div>
              <label>
                Video Width:
                <input
                  type="text"
                  value={width}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.style.video.width")}
                />
              </label>
            </div>
            <div>
              <label>
                Video Height:
                <input
                  type="text"
                  value={height}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.style.video.height")}
                />
              </label>
            </div>
            <div>
              <label>
                Video Border Type:
                <input
                  type="text"
                  value={videoBorderType}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.style.video.videoBorderType")}
                />
              </label>
            </div>
            <div>
              <label>
                Video Border Radius (Top):
                <input
                  type="text"
                  value={videoBorderRadius.top}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.style.video.videoBorderRadius.top")}
                />
              </label>
            </div>
            <div>
              <label>
                Video Border Radius (Right):
                <input
                  type="text"
                  value={videoBorderRadius.right}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.style.video.videoBorderRadius.right")}
                />
              </label>
            </div>
            <div>
              <label>
                Video Border Radius (Bottom):
                <input
                  type="text"
                  value={videoBorderRadius.bottom}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.style.video.videoBorderRadius.bottom")}
                />
              </label>
            </div>
            <div>
              <label>
                Video Border Radius (Left):
                <input
                  type="text"
                  value={videoBorderRadius.left}
                  onChange={(e) => handleChange(e, "UGCVideoManager_template_1.style.video.videoBorderRadius.left")}
                />
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button type="button" onClick={handleUpdateConfig}>
                Update Configuration
              </button>
            </div>
          </form>
        </div>
      </aside>
      <aside style={{
        width: '80%',
      }}>
        <VidoeCarousel property={property} />
      </aside>
    </div>
  );
};

export default ConfigEditor;
