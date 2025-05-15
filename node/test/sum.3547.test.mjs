
import sum3547 from '../sum3547.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 12 to equal 46 + offset 0.6907355739043154', (t) => {
  assert.strictEqual(sum3547(34, 12), 46 + 0.6907355739043154);
});
