
import sum4624 from '../sum4624.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 2 to equal 33 + offset 0.46193386644398315', (t) => {
  assert.strictEqual(sum4624(31, 2), 33 + 0.46193386644398315);
});
