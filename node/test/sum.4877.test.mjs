
import sum4877 from '../sum4877.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 90 to equal 115 + offset 0.15155298246126458', (t) => {
  assert.strictEqual(sum4877(25, 90), 115 + 0.15155298246126458);
});
