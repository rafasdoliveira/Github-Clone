import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import { PiBookBookmark } from 'react-icons/pi';
import { IoLockClosedOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface Form {
  repoName: string;
  repoDescription: string;
  repoVisibility: string;
}

const NewRepository: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<Form>({
    repoName: '',
    repoDescription: '',
    repoVisibility: '',
  });

  useEffect(() => {
    const savedData = localStorage.getItem('form');
    if (savedData) {
      setForm(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('form', JSON.stringify(form));
    alert('Repositório salvo!');

    setForm({
      repoName: '',
      repoDescription: '',
      repoVisibility: '',
    });

    navigate('/');
  };

  return (
    <div className="bg-profileBg h-screen">
      <Header />
      <div className="flex items-center justify-center text-white">
        <div className="mt-14 w-3/6">
          <div className="border-b border-border">
            <div className="mb-4">
              <h2 className="text-2xl font-sans-bold font-bold mb-1">
                Create a new repository
              </h2>
              <p className="text-sm text-userText">
                A repository contains all project files, including the revision
                history. Already have a project repository elsewhere?
                <span className="underline text-followHover">
                  Import a repository.
                </span>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-5 border-b border-border">
              <div className="mb-5">
                <span className="italic text-sm ">
                  Required fields are marked with an asterisk (*).
                </span>
                <div className="flex flex-col mt-3">
                  <div className="flex flex-col">
                    <label
                      htmlFor="repoName"
                      className="text-sm font-sans-bold font-bold mb-2"
                    >
                      Repository name *
                    </label>
                    <input
                      type="text"
                      id="repoName"
                      name="repoName"
                      value={form.repoName}
                      onChange={handleChange}
                      className="w-4/6 full h-8 px-3 py-3 outline-none bg-transparent flex items-center gap-2 border-2 border-border rounded-md text-sm focus:border-2 focus:border-repoNameHome duration-200"
                    />
                  </div>
                  <div className="mt-4 text-sm">
                    <span>
                      Great repository names are short and memorable. Need
                      inspiration? How about{' '}
                      <span className="text-newRepoButton underline font-sans-bold font-bold">
                        ubiquitous-memory
                      </span>
                      ?
                    </span>
                  </div>
                </div>
                <div className="flex flex-col mt-5">
                  <label
                    htmlFor="repoDescription"
                    className="text-sm font-sans-bold font-bold mb-2"
                  >
                    Description{' '}
                    <span className="text-xs text-userText">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="repoDescription"
                    name="repoDescription"
                    value={form.repoDescription}
                    onChange={handleChange}
                    className="w-4/6 full h-8 px-3 py-3 outline-none bg-transparent flex items-center gap-2 border-2 border-border rounded-md text-sm focus:border-2 focus:border-repoNameHome duration-200"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 border-b border-border">
              <div className="mb-5">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="repoVisibility"
                    value="public"
                    checked={form.repoVisibility === 'public'}
                    onChange={handleChange}
                  />
                  <div className="flex items-center gap-1">
                    <span className="flex items-center h-10 text-3xl text-userText">
                      <PiBookBookmark />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-sans-bold font-bold">Public</span>
                      <span className="text-xs text-userText">
                        Anyone on the internet can see this repository. You
                        choose who can commit.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <input
                    type="radio"
                    name="repoVisibility"
                    value="private"
                    checked={form.repoVisibility === 'private'}
                    onChange={handleChange}
                  />
                  <div className="flex items-center gap-1">
                    <span className="flex items-center h-10 text-3xl text-userText">
                      <IoLockClosedOutline />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-sans-bold font-bold">Private</span>
                      <span className="text-xs text-userText">
                        You choose who can see and commit to this repository.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button type="submit" className="p-1 rounded-md bg-newRepoButton">
                Create repository
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewRepository;
