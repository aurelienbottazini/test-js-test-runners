
import sum4656 from '../sum4656.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 0 to equal 93 + offset 0.5161653065777473', (t) => {
  assert.strictEqual(sum4656(93, 0), 93 + 0.5161653065777473);
});
