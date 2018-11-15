module.exports = {
  styleMain: {
    display: "inline-block",
    border: "1px solid transparent",
    backgroundColor: "#fff",
    minWidth: 70,
    padding: '0 7px',
    fontSize: 14,
    lineHeight: "32px",
    cursor: "pointer",
    borderColor: "#d9d9d9",
    borderRadius: "4px",
    color: "rgba(0,0,0,.65)",
    whiteSpace: "nowrap",
    userSelect: "none",
    outline: "none"
  },
  kType: {
    default: {},
    primary: {
      color: "#fff",
      backgroundColor: "#1890ff",
      borderColor: "#1890ff"
    },
    
  },
  onHandler: {
    default: {
      styleMouseOver: {
        color: "#40a9ff",
        borderColor: "#40a9ff"
      },
      styleFocus: {
        color: "#1890ff",
        borderColor: "#1890ff"
      }
    },
    primary: {
      styleMouseOver: {
        color: "#fff",
        backgroundColor: "RGB(64, 169, 255)",
        borderColor: "RGB(64, 169, 255)"
      },
      styleFocus: {
        color: "#fff",
        backgroundColor: "RGB(64, 169, 255)",
        borderColor: "RGB(64, 169, 255)"
      }
    }
  }
};
