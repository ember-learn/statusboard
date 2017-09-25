interface Resource {
  type: string;
  name: string;
  url: string;
}

interface Champion {
  image: string;
  name: string;
  url: string;
}

interface Feature {
  name: string;
  summary: string;
  description: string;
  icon: string;
  statusText: string;
  status: string;
  availability: string;
  resources: Resource[];
  champions: Champion[];
}

interface FeaturesData {
  features: Feature[];
}

export default {} as FeaturesData;
