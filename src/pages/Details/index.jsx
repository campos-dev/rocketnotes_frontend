import { Container, Links, Content } from "./styles.js";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    return navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Are you sure you want to remove?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText title="remove note" onClick={handleRemove} />
            <h2>{data.title}</h2>
            <p>{data.description}</p>

            {data.links && (
              <Section title="Links">
                <Links>
                  {data.links.map((link) => (
                    <li>
                      <a key={String(link.id)} href={link.url} target="_blank">
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}
            {data.tags && (
              <Section title="Tags">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="return" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
