
import sum4731 from '../sum4731.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 88 to equal 150 + offset 0.002011925956630467', (t) => {
  assert.strictEqual(sum4731(62, 88), 150 + 0.002011925956630467);
});
