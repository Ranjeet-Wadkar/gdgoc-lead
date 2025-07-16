export default function Tagline({
  fontSize = '5rem',
  align = 'center',           // default container align
  line1Style = {marginBottom: "-1rem"},            // custom style for line 1
  line2Style = {marginBottom: "0rem"},            // custom style for line 2
  style = {},
  className = '',
}) {
  return (
    <div
      className={`tagline ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
        justifyContent: 'center',
        textAlign: align,
        fontWeight: 700,
        fontSize: fontSize,
        margin: '2rem 0',
        ...style,
      }}
    >
      <span style={{ ...line1Style }}>
        Students <span className="gradient-text">search</span>.
      </span>
      <span style={{ ...line2Style }}>
        Edugle <span className="gradient-text">finds</span>.
      </span>
    </div>
  );
}
