
import sum546 from '../sum546.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 75 to equal 152 + offset 0.8567777710073247', (t) => {
  assert.strictEqual(sum546(77, 75), 152 + 0.8567777710073247);
});
