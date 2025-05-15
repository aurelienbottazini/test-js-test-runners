
import sum3408 from '../sum3408.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 52 to equal 150 + offset 0.3783781647148756', (t) => {
  assert.strictEqual(sum3408(98, 52), 150 + 0.3783781647148756);
});
