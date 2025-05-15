
import sum4088 from '../sum4088.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 11 to equal 50 + offset 0.5093843923918022', (t) => {
  assert.strictEqual(sum4088(39, 11), 50 + 0.5093843923918022);
});
