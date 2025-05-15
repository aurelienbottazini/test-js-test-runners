
import sum4277 from '../sum4277.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 66 to equal 98 + offset 0.8714130095962421', (t) => {
  assert.strictEqual(sum4277(32, 66), 98 + 0.8714130095962421);
});
