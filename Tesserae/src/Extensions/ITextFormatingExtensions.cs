﻿using System;
using System.Linq;
using static H5.Core.dom;

namespace Tesserae
{
    [H5.Name("tss.ITFX")]
    public static class ITextFormatingExtensions
    {
        public static T SetTextSize<T>(this T hasTextSize, TextSize textSize) where T : ITextFormating
        {
            hasTextSize.Size = textSize;
            return hasTextSize;
        }

        public static T SetTextWeight<T>(this T hasTextSize, TextWeight textWeight) where T : ITextFormating
        {
            hasTextSize.Weight = textWeight;
            return hasTextSize;
        }

        public static T SetTextAlign<T>(this T hasTextSize, TextAlign textAlign) where T : ITextFormating
        {
            hasTextSize.TextAlign = textAlign;
            return hasTextSize;
        }

        public static T Tiny<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Size = TextSize.Tiny;
            return hasTextSize;
        }

        public static T XSmall<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Size = TextSize.XSmall;
            return hasTextSize;
        }
        public static T Small<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Size = TextSize.Small;
            return hasTextSize;
        }

        public static T SmallPlus<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Size = TextSize.SmallPlus;
            return hasTextSize;
        }

        public static T Medium<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Size = TextSize.Medium;
            return hasTextSize;
        }
        public static T MediumPlus<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Size = TextSize.MediumPlus;
            return hasTextSize;
        }

        public static T Large<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Size = TextSize.Large;
            return hasTextSize;
        }
        public static T XLarge<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Size = TextSize.XLarge;
            return hasTextSize;
        }

        public static T XXLarge<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Size = TextSize.XXLarge;
            return hasTextSize;
        }

        public static T Mega<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Size = TextSize.Mega;
            return hasTextSize;
        }

        public static T Regular<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Weight = TextWeight.Regular;
            return hasTextSize;
        }

        public static T SemiBold<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Weight = TextWeight.SemiBold;
            return hasTextSize;
        }

        public static T Bold<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.Weight = TextWeight.Bold;
            return hasTextSize;
        }

        public static T TextLeft<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.TextAlign = TextAlign.Left;
            return hasTextSize;
        }

        public static T TextCenter<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.TextAlign = TextAlign.Center;
            return hasTextSize;
        }

        public static T TextRight<T>(this T hasTextSize) where T : ITextFormating
        {
            hasTextSize.TextAlign = TextAlign.Right;
            return hasTextSize;
        }

        internal static TextSize FromClassList(HTMLElement element, TextSize defaultValue)
        {
            var curFontSize = element.classList.FirstOrDefault(t => t.StartsWith("tss-fontsize-"));
            if (string.IsNullOrEmpty(curFontSize)) return defaultValue;
            return curFontSize.As<TextSize>(); //Only works because TextSize has [Enum(Emit.StringName)]

            //switch (curFontSize)
            //{
            //    case "tss-fontsize-mega": return TextSize.Mega;
            //    case "tss-fontsize-xxlarge": return TextSize.XXLarge;
            //    case "tss-fontsize-xlarge": return TextSize.XLarge;
            //    case "tss-fontsize-large": return TextSize.Large;
            //    case "tss-fontsize-mediumplus": return TextSize.MediumPlus;
            //    case "tss-fontsize-medium": return TextSize.Medium;
            //    case "tss-fontsize-smallplus": return TextSize.SmallPlus;
            //    case "tss-fontsize-small": return TextSize.Small;
            //    case "tss-fontsize-xsmall": return TextSize.XSmall;
            //    case "tss-fontsize-tiny": return TextSize.Tiny;
            //    default: return defaultValue;
            //}
        }

        internal static TextAlign FromClassList(HTMLElement element, TextAlign defaultValue)
        {
            var curTextAlign = element.classList.FirstOrDefault(t => t.StartsWith("tss-textalign-"));
            if (string.IsNullOrEmpty(curTextAlign)) return defaultValue;
            return curTextAlign.As<TextAlign>(); //Only works because TextAlign has [Enum(Emit.StringName)]

            //switch (curTextAlign)
            //{
            //    case "tss-textalign-left": return TextAlign.Left;
            //    case "tss-textalign-center": return TextAlign.Center;
            //    case "tss-textalign-right": return TextAlign.Right;
            //    default: return defaultValue;
            //}
        }

        internal static TextWeight FromClassList(HTMLElement element, TextWeight defaultValue)
        {
            var curWeight = element.classList.FirstOrDefault(t => t.StartsWith("tss-fontweight-"));
            if (string.IsNullOrEmpty(curWeight)) return defaultValue;
            return curWeight.As<TextWeight>(); //Only works because TextWeight has [Enum(Emit.StringName)]

            //switch (curWeight)
            //{
            //    case "tss-fontweight-regular": return TextWeight.Regular;
            //    case "tss-fontweight-semibold": return TextWeight.SemiBold;
            //    case "tss-fontweight-bold": return TextWeight.Bold;
            //    default: return defaultValue;
            //}
        }
    }
}