
export type Feature = {
  name: string,
  description: string,
  icon: string,
  status: string,
  availability: string,
  resources: ResourceLink[],
  champions: Member[]
};

export type Member = {
  name: string,
  image: string
  url: string
};

export interface ResourceLink {
  type: string,
  name: string,
  url: string
}

// Might want to set specific alternative text for icons and images
// type Image = {
//   src: string,
//   alt: string
// };

const DATA = window.features;

export default class FeatureService {
    features = DATA;
    
    fetchFeatures(): Feature[] {
        return this.features;
    }
};
