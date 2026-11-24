import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPerson extends Struct.ComponentSchema {
  collectionName: 'components_about_people';
  info: {
    displayName: 'Person';
    icon: 'information';
  };
  attributes: {
    biography: Schema.Attribute.Blocks;
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface FaqItem extends Struct.ComponentSchema {
  collectionName: 'components_faq_items';
  info: {
    displayName: 'Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
    category: Schema.Attribute.Enumeration<
      ['general', 'leaderboard', 'predictions']
    >;
    question: Schema.Attribute.String;
  };
}

export interface HomeJeweller extends Struct.ComponentSchema {
  collectionName: 'components_home_jewellers';
  info: {
    displayName: 'Jeweller';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface HomeStep extends Struct.ComponentSchema {
  collectionName: 'components_home_steps';
  info: {
    displayName: 'step';
    icon: 'house';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'about.person': AboutPerson;
      'faq.item': FaqItem;
      'home.jeweller': HomeJeweller;
      'home.step': HomeStep;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
