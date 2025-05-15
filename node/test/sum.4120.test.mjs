
import sum4120 from '../sum4120.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 16 to equal 34 + offset 0.22603811359536385', (t) => {
  assert.strictEqual(sum4120(18, 16), 34 + 0.22603811359536385);
});
