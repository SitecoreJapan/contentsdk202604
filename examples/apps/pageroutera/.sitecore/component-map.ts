// Below are built-in components that are available in the app, it's recommended to keep them as is

import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

// end of built-in components
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import { RichText, Image, Navigation, Container, Promo, RowSplitter, PageContent, ColumnSplitter, Title } from '@myorg/shared-ui';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['PartialDesignDynamicPlaceholder', { ...PartialDesignDynamicPlaceholder }],
  ['RichText', RichText],
  ['Image', Image],
  ['Navigation', Navigation],
  ['Container', Container],
  ['Promo', Promo],
  ['RowSplitter', RowSplitter],
  ['PageContent', PageContent],
  ['ColumnSplitter', ColumnSplitter],
  ['Title', Title],
]);

export default componentMap;
