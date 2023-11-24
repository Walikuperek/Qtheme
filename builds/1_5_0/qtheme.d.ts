declare module "types/jsstyle.type" {
    export type JSStyle = {
        all?: string | 'initial' | 'inherit' | 'unset' | 'revert';
        alignContent?: string | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'initial' | 'inherit';
        alignItems?: string | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
        alignSelf?: string | 'auto' | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
        animation?: string | 'initial' | 'inherit';
        animationDelay?: string | 'initial' | 'inherit';
        animationDirection?: string | 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' | 'initial' | 'inherit';
        animationDuration?: string | 'initial' | 'inherit';
        animationFillMode?: string | 'none' | 'forwards' | 'backwards' | 'both' | 'initial' | 'inherit';
        animationIterationCount?: string | 'initial' | 'inherit';
        animationName?: string | 'none' | 'initial' | 'inherit';
        animationPlayState?: string | 'paused' | 'running' | 'initial' | 'inherit';
        animationTimingFunction?: string | 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'initial' | 'inherit';
        backfaceVisibility?: string | 'visible' | 'hidden' | 'initial' | 'inherit';
        background?: string | 'initial' | 'inherit';
        backgroundAttachment?: string | 'scroll' | 'fixed' | 'local' | 'initial' | 'inherit';
        backgroundBlendMode?: string | 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'saturation' | 'color' | 'luminosity' | 'initial' | 'inherit';
        backgroundClip?: string | 'border-box' | 'padding-box' | 'content-box' | 'initial' | 'inherit';
        backgroundColor?: string | 'transparent' | 'initial' | 'inherit';
        backgroundImage?: string | 'none' | 'initial' | 'inherit';
        backgroundOrigin?: string | 'padding-box' | 'border-box' | 'content-box' | 'initial' | 'inherit';
        backgroundPosition?: string | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'initial' | 'inherit';
        backgroundRepeat?: string | 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'initial' | 'inherit';
        backgroundSize?: string | 'auto' | 'cover' | 'contain' | 'initial' | 'inherit';
        border?: string | 'initial' | 'inherit';
        borderBottom?: string | 'initial' | 'inherit';
        borderBottomColor?: string | 'transparent' | 'initial' | 'inherit';
        borderBottomLeftRadius?: string | number | 'initial' | 'inherit';
        borderBottomRightRadius?: string | number | 'initial' | 'inherit';
        borderBottomStyle?: string | 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
        borderBottomWidth?: string | number | 'medium' | 'thin' | 'thick' | 'initial' | 'inherit';
        borderCollapse?: string | 'collapse' | 'separate' | 'initial' | 'inherit';
        borderColor?: string | 'transparent' | 'initial' | 'inherit';
        borderImage?: string | 'initial' | 'inherit';
        borderImageOutset?: string | number | 'initial' | 'inherit';
        borderImageRepeat?: string | 'stretch' | 'repeat' | 'round' | 'initial' | 'inherit';
        borderImageSlice?: string | number | 'fill' | 'initial' | 'inherit';
        borderImageSource?: string | 'none' | 'initial' | 'inherit';
        borderImageWidth?: string | number | 'auto' | 'initial' | 'inherit';
        borderLeft?: string | 'initial' | 'inherit';
        borderLeftColor?: string | 'transparent' | 'initial' | 'inherit';
        borderLeftStyle?: string | 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
        borderLeftWidth?: string | number | 'medium' | 'thin' | 'thick' | 'initial' | 'inherit';
        borderRadius?: string | number | 'initial' | 'inherit';
        borderRight?: string | 'initial' | 'inherit';
        borderRightColor?: string | 'transparent' | 'initial' | 'inherit';
        borderRightStyle?: string | 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
        borderRightWidth?: string | number | 'medium' | 'thin' | 'thick' | 'initial' | 'inherit';
        borderSpacing?: string | number | 'initial' | 'inherit';
        borderStyle?: string | 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
        borderTop?: string | 'initial' | 'inherit';
        borderTopColor?: string | 'transparent' | 'initial' | 'inherit';
        borderTopLeftRadius?: string | number | 'initial' | 'inherit';
        borderTopRightRadius?: string | number | 'initial' | 'inherit';
        borderTopStyle?: string | 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
        borderTopWidth?: string | number | 'medium' | 'thin' | 'thick' | 'initial' | 'inherit';
        borderWidth?: string | number | 'medium' | 'thin' | 'thick' | 'initial' | 'inherit';
        bottom?: string | number | 'auto' | 'initial' | 'inherit';
        boxShadow?: string | 'none' | 'initial' | 'inherit';
        boxSizing?: string | 'content-box' | 'border-box' | 'initial' | 'inherit';
        captionSide?: string | 'top' | 'bottom' | 'initial' | 'inherit';
        clear?: string | 'none' | 'left' | 'right' | 'both' | 'initial' | 'inherit';
        clip?: string | 'auto' | 'initial' | 'inherit';
        color?: string | 'initial' | 'inherit' | 'currentColor';
        columnCount?: string | number | 'auto' | 'initial' | 'inherit';
        columnFill?: string | 'balance' | 'auto' | 'initial' | 'inherit';
        columnGap?: string | number | 'normal' | 'initial' | 'inherit';
        columnRule?: string | 'initial' | 'inherit';
        columnRuleColor?: string | 'initial' | 'inherit';
        columnRuleStyle?: string | 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
        columnRuleWidth?: string | number | 'medium' | 'thin' | 'thick' | 'initial' | 'inherit';
        columnSpan?: string | 'none' | 'all' | 'initial' | 'inherit';
        columnWidth?: string | number | 'auto' | 'initial' | 'inherit';
        columns?: string | 'initial' | 'inherit';
        content?: string | 'normal' | 'none' | 'counter' | 'attr' | 'open-quote' | 'close-quote' | 'no-open-quote' | 'no-close-quote' | 'initial' | 'inherit';
        counterIncrement?: string | 'none' | 'initial' | 'inherit';
        counterReset?: string | 'none' | 'initial' | 'inherit';
        cursor?: string | 'auto' | 'default' | 'none' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'all-scroll' | 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing' | 'initial' | 'inherit';
        direction?: string | 'ltr' | 'rtl' | 'initial' | 'inherit';
        display?: string | 'inline' | 'block' | 'contents' | 'flex' | 'grid' | 'inline-block' | 'inline-flex' | 'inline-grid' | 'inline-table' | 'list-item' | 'run-in' | 'table' | 'table-caption' | 'table-column-group' | 'table-header-group' | 'table-footer-group' | 'table-row-group' | 'table-cell' | 'table-column' | 'table-row' | 'none' | 'initial' | 'inherit';
        emptyCells?: string | 'show' | 'hide' | 'initial' | 'inherit';
        filter?: string | 'none' | 'initial' | 'inherit';
        flex?: string | number | 'auto' | 'initial' | 'none' | 'inherit';
        flexBasis?: string | number | 'auto' | 'initial' | 'inherit';
        flexDirection?: string | 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';
        flexFlow?: string | 'initial' | 'inherit';
        flexGrow?: string | number | 'initial' | 'inherit';
        flexShrink?: string | number | 'initial' | 'inherit';
        flexWrap?: string | 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
        float?: string | 'none' | 'left' | 'right' | 'initial' | 'inherit';
        font?: string | 'initial' | 'inherit';
        fontFamily?: string | 'initial' | 'inherit';
        fontFeatureSettings?: string | 'normal' | 'initial' | 'inherit';
        fontKerning?: string | 'auto' | 'normal' | 'none' | 'initial' | 'inherit';
        fontSize?: string | number | 'medium' | 'xx-small' | 'x-small' | 'small' | 'large' | 'x-large' | 'xx-large' | 'smaller' | 'larger' | 'initial' | 'inherit';
        fontSizeAdjust?: string | 'none' | 'initial' | 'inherit';
        fontStretch?: string | 'normal' | 'ultra-condensed' | 'extra-condensed' | 'condensed' | 'semi-condensed' | 'semi-expanded' | 'expanded' | 'extra-expanded' | 'ultra-expanded' | 'initial' | 'inherit';
        fontStyle?: string | 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';
        fontSynthesis?: string | 'none' | 'weight' | 'style' | 'initial' | 'inherit';
        fontVariant?: string | 'normal' | 'small-caps' | 'initial' | 'inherit';
        fontWeight?: string | number | 'normal' | 'bold' | 'bolder' | 'lighter' | 'initial' | 'inherit';
        fontVariantCaps?: string | 'normal' | 'small-caps' | 'all-small-caps' | 'petite-caps' | 'all-petite-caps' | 'unicase' | 'titling-caps' | 'initial' | 'inherit';
        fontVariantEastAsian?: string | 'normal' | 'jis78' | 'jis83' | 'jis90' | 'jis04' | 'simplified' | 'traditional' | 'full-width' | 'proportional-width' | 'ruby' | 'initial' | 'inherit';
        fontVariantLigatures?: string | 'normal' | 'none' | 'common-ligatures' | 'no-common-ligatures' | 'discretionary-ligatures' | 'no-discretionary-ligatures' | 'historical-ligatures' | 'no-historical-ligatures' | 'contextual' | 'no-contextual' | 'initial' | 'inherit';
        fontVariantNumeric?: string | 'normal' | 'ordinal' | 'slashed-zero' | 'lining-nums' | 'oldstyle-nums' | 'proportional-nums' | 'tabular-nums' | 'diagonal-fractions' | 'stacked-fractions' | 'initial' | 'inherit';
        fontVariantPosition?: string | 'normal' | 'sub' | 'super' | 'initial' | 'inherit';
        grid?: string | 'none' | 'initial' | 'inherit';
        gridArea?: string | 'initial' | 'inherit';
        gridAutoColumns?: string | 'auto' | 'initial' | 'inherit';
        gridAutoFlow?: string | 'row' | 'column' | 'dense' | 'initial' | 'inherit';
        gridAutoRows?: string | 'auto' | 'initial' | 'inherit';
        gridColumn?: string | 'auto' | 'initial' | 'inherit';
        gridColumnEnd?: string | 'auto' | 'initial' | 'inherit';
        gridColumnGap?: string | 'normal' | 'initial' | 'inherit';
        gridColumnStart?: string | 'auto' | 'initial' | 'inherit';
        gridGap?: string | number | 'normal' | 'initial' | 'inherit';
        gridRow?: string | 'auto' | 'initial' | 'inherit';
        gridRowEnd?: string | 'auto' | 'initial' | 'inherit';
        gridRowGap?: string | 'normal' | 'initial' | 'inherit';
        gridRowStart?: string | 'auto' | 'initial' | 'inherit';
        gridTemplate?: string | 'none' | 'initial' | 'inherit';
        gridTemplateAreas?: string | 'none' | 'initial' | 'inherit';
        gridTemplateColumns?: string | 'none' | 'initial' | 'inherit';
        gridTemplateRows?: string | 'none' | 'initial' | 'inherit';
        height?: string | number | 'auto' | 'initial' | 'inherit';
        hyphens?: string | 'none' | 'manual' | 'auto' | 'initial' | 'inherit';
        imageOrientation?: string | 'none' | 'flip' | 'initial' | 'inherit';
        imageRendering?: string | 'auto' | 'smooth' | 'high-quality' | 'crisp-edges' | 'pixelated' | 'initial' | 'inherit';
        imageResolution?: string | 'normal' | 'initial' | 'inherit';
        imeMode?: string | 'auto' | 'normal' | 'active' | 'inactive' | 'disabled' | 'initial' | 'inherit';
        inlineSize?: string | number | 'auto' | 'initial' | 'inherit';
        justifyContent?: string | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit';
        justifyItems?: string | 'auto' | 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'left' | 'right' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | 'legacy right' | 'legacy left' | 'legacy center' | 'legacy justify' | 'initial' | 'inherit';
        justifySelf?: string | 'auto' | 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'left' | 'right' | 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center' | 'legacy right' | 'legacy left' | 'legacy center' | 'legacy justify' | 'initial' | 'inherit';
        left?: string | number | 'auto' | 'initial' | 'inherit';
        letterSpacing?: string | 'normal' | 'initial' | 'inherit';
        lineBreak?: string | 'auto' | 'loose' | 'normal' | 'strict' | 'anywhere' | 'initial' | 'inherit';
        lineHeight?: string | number | 'normal' | 'initial' | 'inherit';
        listStyle?: string | 'none' | 'initial' | 'inherit';
        listStyleImage?: string | 'none' | 'initial' | 'inherit';
        listStylePosition?: string | 'inside' | 'outside' | 'initial' | 'inherit';
        listStyleType?: string | 'none' | 'circle' | 'disc' | 'square' | 'decimal' | 'georgian' | 'trad-chinese-informal' | 'kannada' | 'cjk-earthly-branch' | 'cjk-heavenly-stem' | 'cjk-ideographic' | 'simp-chinese-informal' | 'tamil' | 'telugu' | 'armenian' | 'bengali' | 'cambodian' | 'khmer' | 'devanagari' | 'gujarati' | 'gurmukhi' | 'malayalam' | 'mongolian' | 'myanmar' | 'oriya' | 'persian' | 'tibetan' | 'thai' | 'lower-alpha' | 'lower-greek' | 'lower-latin' | 'lower-roman' | 'upper-alpha' | 'upper-latin' | 'upper-roman' | 'initial' | 'inherit';
        margin?: string | number | 'auto' | 'initial' | 'inherit';
        marginBlockEnd?: string | number | 'auto' | 'initial' | 'inherit';
        marginBlockStart?: string | number | 'auto' | 'initial' | 'inherit';
        marginBottom?: string | number | 'auto' | 'initial' | 'inherit';
        marginInlineEnd?: string | number | 'auto' | 'initial' | 'inherit';
        marginInlineStart?: string | number | 'auto' | 'initial' | 'inherit';
        marginLeft?: string | number | 'auto' | 'initial' | 'inherit';
        marginRight?: string | number | 'auto' | 'initial' | 'inherit';
        marginTop?: string | number | 'auto' | 'initial' | 'inherit';
        markerOffset?: string | 'auto' | 'initial' | 'inherit';
        mask?: string | 'none' | 'initial' | 'inherit';
        maskBorder?: string | 'none' | 'initial' | 'inherit';
        maskBorderMode?: string | 'alpha' | 'luminance' | 'initial' | 'inherit';
        maskBorderOutset?: string | number | 'initial' | 'inherit';
        maskBorderRepeat?: string | 'stretch' | 'repeat' | 'round' | 'space' | 'initial' | 'inherit';
        maskBorderSlice?: string | 'fill' | 'initial' | 'inherit';
        maskBorderSource?: string | 'none' | 'initial' | 'inherit';
        maskBorderWidth?: string | number | 'auto' | 'initial' | 'inherit';
        maskClip?: string | 'border-box' | 'padding-box' | 'content-box' | 'initial' | 'inherit';
        maskComposite?: string | 'add' | 'subtract' | 'intersect' | 'exclude' | 'initial' | 'inherit';
        maskImage?: string | 'none' | 'initial' | 'inherit';
        maskMode?: string | 'alpha' | 'luminance' | 'initial' | 'inherit';
        maskOrigin?: string | 'border-box' | 'padding-box' | 'content-box' | 'initial' | 'inherit';
        maskPosition?: string | 'center' | 'left' | 'right' | 'top' | 'bottom' | 'initial' | 'inherit';
        maskRepeat?: string | 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | 'initial' | 'inherit';
        maskSize?: string | 'auto' | 'cover' | 'contain' | 'initial' | 'inherit';
        maskType?: string | 'luminance' | 'alpha' | 'none' | 'initial' | 'inherit';
        maxBlockSize?: string | number | 'none' | 'initial' | 'inherit';
        maxHeight?: string | number | 'none' | 'initial' | 'inherit';
        maxInlineSize?: string | number | 'none' | 'initial' | 'inherit';
        maxWidth?: string | number | 'none' | 'initial' | 'inherit';
        minBlockSize?: string | number | 'auto' | 'initial' | 'inherit';
        minHeight?: string | number | 'auto' | 'initial' | 'inherit';
        minInlineSize?: string | number | 'auto' | 'initial' | 'inherit';
        minWidth?: string | number | 'auto' | 'initial' | 'inherit';
        mixBlendMode?: string | 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity' | 'initial' | 'inherit';
        objectFit?: string | 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | 'initial' | 'inherit';
        objectPosition?: string | 'center' | 'left' | 'right' | 'top' | 'bottom' | 'initial' | 'inherit';
        offsetBlockEnd?: string | number | 'auto' | 'initial' | 'inherit';
        offsetBlockStart?: string | number | 'auto' | 'initial' | 'inherit';
        offsetInlineEnd?: string | number | 'auto' | 'initial' | 'inherit';
        offsetInlineStart?: string | number | 'auto' | 'initial' | 'inherit';
        opacity?: string | number | 'initial' | 'inherit';
        order?: string | number | 'initial' | 'inherit';
        orphans?: string | number | 'initial' | 'inherit';
        outline?: string | 'initial' | 'inherit';
        outlineColor?: string | 'invert' | 'initial' | 'inherit';
        outlineOffset?: string | 'initial' | 'inherit';
        outlineStyle?: string | 'auto' | 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'initial' | 'inherit';
        outlineWidth?: string | 'medium' | 'thin' | 'thick' | 'initial' | 'inherit';
        overflow?: string | 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit';
        overflowAnchor?: string | 'auto' | 'none' | 'initial' | 'inherit';
        overflowWrap?: string | 'normal' | 'break-word' | 'initial' | 'inherit';
        overflowX?: string | 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit';
        overflowY?: string | 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit';
        padding?: string | number | 'initial' | 'inherit';
        paddingBottom?: string | number | 'initial' | 'inherit';
        paddingLeft?: string | number | 'initial' | 'inherit';
        paddingRight?: string | number | 'initial' | 'inherit';
        paddingTop?: string | number | 'initial' | 'inherit';
        pageBreakAfter?: string | 'auto' | 'always' | 'avoid' | 'left' | 'right' | 'initial' | 'inherit';
        pageBreakBefore?: string | 'auto' | 'always' | 'avoid' | 'left' | 'right' | 'initial' | 'inherit';
        pageBreakInside?: string | 'auto' | 'avoid' | 'initial' | 'inherit';
        paintOrder?: string | 'normal' | 'fill' | 'stroke' | 'markers' | 'initial' | 'inherit';
        perspective?: string | number | 'none' | 'initial' | 'inherit';
        perspectiveOrigin?: string | 'center' | 'top' | 'bottom' | 'left' | 'right' | 'initial' | 'inherit';
        placeContent?: string | 'normal' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline' | 'first baseline' | 'last baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset';
        placeItems?: string | 'normal' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline' | 'first baseline' | 'last baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset';
        placeSelf?: string | 'auto' | 'normal' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline' | 'first baseline' | 'last baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset';
        pointerEvents?: string | 'auto' | 'none' | 'visiblePainted' | 'visibleFill' | 'visibleStroke' | 'visible' | 'painted' | 'fill' | 'stroke' | 'all' | 'inherit' | 'initial' | 'unset';
        position?: string | 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | 'initial' | 'inherit';
        quotes?: string | 'none' | 'initial' | 'inherit';
        resize?: string | 'none' | 'both' | 'horizontal' | 'vertical' | 'initial' | 'inherit';
        right?: string | number | 'auto' | 'initial' | 'inherit';
        rowGap?: string | number | 'normal' | 'initial' | 'inherit';
        rubyAlign?: string | 'start' | 'center' | 'space-between' | 'space-around' | 'inherit' | 'initial' | 'unset';
        rubyMerge?: string | 'separate' | 'collapse' | 'auto' | 'inherit' | 'initial' | 'unset';
        rubyPosition?: string | 'over' | 'under' | 'inter-character' | 'inherit' | 'initial' | 'unset';
        scrollBehavior?: string | 'auto' | 'smooth' | 'initial' | 'inherit';
        scrollMargin?: string | number | 'auto' | 'initial' | 'inherit';
        scrollMarginBlock?: string | number | 'auto' | 'initial' | 'inherit';
        scrollMarginBlockEnd?: string | number | 'auto' | 'initial' | 'inherit';
        scrollMarginBlockStart?: string | number | 'auto' | 'initial' | 'inherit';
        scrollMarginBottom?: string | number | 'auto' | 'initial' | 'inherit';
        scrollMarginInline?: string | number | 'auto' | 'initial' | 'inherit';
        scrollMarginInlineEnd?: string | number | 'auto' | 'initial' | 'inherit';
        scrollMarginInlineStart?: string | number | 'auto' | 'initial' | 'inherit';
        scrollMarginLeft?: string | number | 'auto' | 'initial' | 'inherit';
        scrollMarginRight?: string | number | 'auto' | 'initial' | 'inherit';
        scrollMarginTop?: string | number | 'auto' | 'initial' | 'inherit';
        scrollPadding?: string | number | 'auto' | 'initial' | 'inherit';
        scrollPaddingBlock?: string | number | 'auto' | 'initial' | 'inherit';
        scrollPaddingBlockEnd?: string | number | 'auto' | 'initial' | 'inherit';
        scrollPaddingBlockStart?: string | number | 'auto' | 'initial' | 'inherit';
        scrollPaddingBottom?: string | number | 'auto' | 'initial' | 'inherit';
        scrollPaddingInline?: string | number | 'auto' | 'initial' | 'inherit';
        scrollPaddingInlineEnd?: string | number | 'auto' | 'initial' | 'inherit';
        scrollPaddingInlineStart?: string | number | 'auto' | 'initial' | 'inherit';
        scrollPaddingLeft?: string | number | 'auto' | 'initial' | 'inherit';
        scrollPaddingRight?: string | number | 'auto' | 'initial' | 'inherit';
        scrollPaddingTop?: string | number | 'auto' | 'initial' | 'inherit';
        scrollSnapAlign?: string | 'none' | 'start' | 'end' | 'center' | 'inherit' | 'initial' | 'unset';
        scrollSnapStop?: string | 'normal' | 'always' | 'inherit' | 'initial' | 'unset';
        scrollSnapType?: string | 'none' | 'mandatory' | 'proximity' | 'inherit' | 'initial' | 'unset';
        shapeImageThreshold?: string | number | 'initial' | 'inherit';
        shapeMargin?: string | number | 'initial' | 'inherit';
        shapeOutside?: string | 'none' | 'margin-box' | 'content-box' | 'border-box' | 'padding-box' | 'initial' | 'inherit';
        tabSize?: string | number | 'initial' | 'inherit';
        tableLayout?: string | 'auto' | 'fixed' | 'initial' | 'inherit';
        textAlign?: string | 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
        textAlignLast?: string | 'auto' | 'left' | 'right' | 'center' | 'justify' | 'start' | 'end' | 'initial' | 'inherit';
        textCombineUpright?: string | 'none' | 'all' | 'inherit' | 'initial' | 'unset';
        textDecoration?: string | 'none' | 'underline' | 'overline' | 'line-through' | 'initial' | 'inherit';
        textDecorationColor?: string | 'currentColor' | 'initial' | 'inherit';
        textDecorationLine?: string | 'none' | 'underline' | 'overline' | 'line-through' | 'initial' | 'inherit';
        textDecorationSkip?: string | 'none' | 'objects' | 'spaces' | 'initial' | 'inherit';
        textDecorationSkipInk?: string | 'none' | 'auto' | 'all' | 'initial' | 'inherit';
        textDecorationStyle?: string | 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy' | 'initial' | 'inherit';
        textDecorationThickness?: string | number | 'auto' | 'initial' | 'inherit';
        textDecorationWidth?: string | number | 'auto' | 'initial' | 'inherit';
        textEmphasis?: string | 'none' | 'accent' | 'dot' | 'circle' | 'disc' | 'before' | 'after' | 'initial' | 'inherit';
        textEmphasisColor?: string | 'currentColor' | 'initial' | 'inherit';
        textEmphasisPosition?: string | 'over' | 'under' | 'initial' | 'inherit';
        textEmphasisStyle?: string | 'none' | 'accent' | 'dot' | 'circle' | 'disc' | 'initial' | 'inherit';
        textIndent?: string | number | 'initial' | 'inherit';
        textJustify?: string | 'auto' | 'inter-word' | 'inter-character' | 'none' | 'initial' | 'inherit';
        textOrientation?: string | 'mixed' | 'upright' | 'sideways' | 'initial' | 'inherit';
        textOverflow?: string | 'clip' | 'ellipsis' | 'initial' | 'inherit';
        textRendering?: string | 'auto' | 'optimizeSpeed' | 'optimizeLegibility' | 'geometricPrecision' | 'initial' | 'inherit';
        textShadow?: string | 'none' | 'initial' | 'inherit';
        textTransform?: string | 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';
        textUnderlineOffset?: string | number | 'auto' | 'initial' | 'inherit';
        textUnderlinePosition?: string | 'auto' | 'under' | 'left' | 'right' | 'under left' | 'under right' | 'initial' | 'inherit';
        top?: string | number | 'auto' | 'initial' | 'inherit';
        touchAction?: string | 'auto' | 'none' | 'pan-x' | 'pan-left' | 'pan-right' | 'pan-y' | 'pan-up' | 'pan-down' | 'pinch-zoom' | 'manipulation' | 'initial' | 'inherit';
        transform?: string | 'none' | 'matrix()' | 'matrix3d()' | 'translate()' | 'translateY()' | 'translateX()' | 'translateZ()' | 'translate3d()' | 'scale()' | 'scaleY()' | 'scaleX()' | 'scaleZ()' | 'scale3d()' | 'rotate()' | 'rotateY()' | 'rotateX()' | 'rotateZ()' | 'rotate3d()' | 'skew()' | 'skewY()' | 'skewX()' | 'initial' | 'inherit';
        transformBox?: string | 'border-box' | 'fill-box' | 'view-box' | 'initial' | 'inherit';
        transformOrigin?: string | 'left' | 'right' | 'center' | 'top' | 'bottom' | 'initial' | 'inherit';
        transformStyle?: string | 'flat' | 'preserve-3d' | 'initial' | 'inherit';
        transition?: string | 'initial' | 'inherit';
        transitionDelay?: string | 'initial' | 'inherit';
        transitionDuration?: string | 'initial' | 'inherit';
        transitionProperty?: string | 'none' | 'all' | 'initial' | 'inherit';
        transitionTimingFunction?: string | 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'initial' | 'inherit';
        verticalAlign?: string | 'baseline' | 'sub' | 'super' | 'top' | 'text-top' | 'middle' | 'bottom' | 'text-bottom' | 'initial' | 'inherit';
        visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit';
        whiteSpace?: 'normal' | 'pre' | 'nowrap' | 'pre-line' | 'pre-wrap' | 'initial' | 'inherit';
        width?: string | number | 'auto' | 'initial' | 'inherit';
        wordBreak?: string | 'normal' | 'break-all' | 'keep-all' | 'break-word' | 'initial' | 'inherit';
        wordSpacing?: string | number | 'normal' | 'initial' | 'inherit';
        wordWrap?: string | 'normal' | 'break-word' | 'initial' | 'inherit';
        writingMode?: string | 'horizontal-tb' | 'vertical-rl' | 'vertical-lr' | 'initial' | 'inherit';
        zIndex?: string | number | 'auto' | 'initial' | 'inherit';
        zoom?: string | 'normal' | 'reset' | 'initial' | 'inherit';
    };
}
declare module "types/css-props.type" {
    import { JSStyle } from "types/jsstyle.type";
    export type CSSProps = JSStyle & Partial<Record<string, string | number>>;
}
declare module "types/index" {
    export * from "types/jsstyle.type";
    export * from "types/css-props.type";
}
declare module "interfaces/theme.interface" {
    import { CSSProps } from "types/index";
    export type AtomName = string;
    /**
     * @info AtomValue type contains any type, because it allows to use freely with React.
     */
    export type AtomValue = string | CSSProps | any;
    /**
     * @description Base css :root variable [key, value] or [key, { [key: string]: string }]
     * @example ['--color-primary', '#000']
     * */
    export type ThemeAtom = [AtomName, AtomValue];
    /**
     * @description Theme interface, base on it your theme or extend this interface with your own properties.
     */
    export interface Theme {
        name: string;
        atoms: ThemeAtom[];
    }
}
declare module "interfaces/set-root-atoms-options.interface" {
    import { ThemeAtom } from "interfaces/theme.interface";
    export interface SetRootAtomsOptions {
        generateCSS: boolean;
        token: string;
        commonToken: string;
    }
    export interface InitRootAtomsOptions extends SetRootAtomsOptions {
        commonAtoms: ThemeAtom[];
    }
}
declare module "interfaces/theme-changer.interface" {
    import { Theme, ThemeAtom } from "interfaces/theme.interface";
    import { InitRootAtomsOptions, SetRootAtomsOptions } from "interfaces/set-root-atoms-options.interface";
    export interface ThemeChanger {
        /**
         * @description Initializes default theme (from localStorage else defaultTheme) and common atoms
         * @param defaultTheme
         * @param options
         */
        init(defaultTheme: Theme, options?: Partial<InitRootAtomsOptions>): void;
        /**
         * @description Sets provided css root atoms to the current theme
         * @sideEffect will update LocalStorage as well, key=options.token, defaults to 'Qtheme'
         * @param theme
         * @param options
         */
        setTheme(theme: Theme, options?: Partial<SetRootAtomsOptions>): void;
        /**
         * @description Returns current theme from localStorage
         * @param themeToken defaults to 'Qtheme'
         */
        getTheme(themeToken?: string): Theme | null;
        /**
         * @description Updates common atoms
         * @sideEffect will update LocalStorage as well, key=options.commonToken, defaults to 'Qtheme-common'
         * @param atoms
         * @param options
         */
        setCommonAtoms(atoms: ThemeAtom[], options?: Partial<SetRootAtomsOptions>): void;
        /**
         * @description Returns common atoms from localStorage
         * @param commonThemeToken defaults to 'Qtheme-common'
         */
        getCommonAtoms(commonThemeToken?: string): ThemeAtom[] | null;
    }
}
declare module "interfaces/index" {
    export * from "interfaces/theme-changer.interface";
    export * from "interfaces/theme.interface";
    export * from "interfaces/set-root-atoms-options.interface";
}
declare module "config" {
    import { SetRootAtomsOptions } from "interfaces/index";
    export const THEME_TOKEN = "Qtheme";
    export const THEME_COMMON_TOKEN = "Qtheme-common";
    export const DEFAULT_OPTIONS: SetRootAtomsOptions;
}
declare module "helpers/map-to-kebab-case.helper" {
    export const mapToKebabCase: (str: string) => string;
}
declare module "helpers/index" {
    export * from "helpers/map-to-kebab-case.helper";
}
declare module "set-root-atoms" {
    import { ThemeAtom, SetRootAtomsOptions } from "interfaces/index";
    export const setRootAtoms: (atoms: ThemeAtom[], options?: Partial<SetRootAtomsOptions>) => void;
}
declare module "qtheme" {
    import { ThemeChanger } from "interfaces/index";
    export const Qtheme: ThemeChanger;
}
declare module "index" {
    export * from "config";
    export * from "qtheme";
    export * from "interfaces/index";
    export * from "types/index";
}
