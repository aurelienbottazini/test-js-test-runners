
import sum160 from '../sum160.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 71 to equal 84 + offset 0.5106068955928569', (t) => {
  assert.strictEqual(sum160(13, 71), 84 + 0.5106068955928569);
});
