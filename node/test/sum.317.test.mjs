
import sum317 from '../sum317.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 90 to equal 91 + offset 0.11963557574787331', (t) => {
  assert.strictEqual(sum317(1, 90), 91 + 0.11963557574787331);
});
