
import sum4814 from '../sum4814.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 70 to equal 156 + offset 0.1431967378790303', (t) => {
  assert.strictEqual(sum4814(86, 70), 156 + 0.1431967378790303);
});
