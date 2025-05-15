
import sum939 from '../sum939.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 41 to equal 66 + offset 0.9987753425705682', (t) => {
  assert.strictEqual(sum939(25, 41), 66 + 0.9987753425705682);
});
