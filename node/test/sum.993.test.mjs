
import sum993 from '../sum993.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 68 to equal 142 + offset 0.9421281665887503', (t) => {
  assert.strictEqual(sum993(74, 68), 142 + 0.9421281665887503);
});
