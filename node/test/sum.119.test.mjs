
import sum119 from '../sum119.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 90 to equal 182 + offset 0.3781916370245255', (t) => {
  assert.strictEqual(sum119(92, 90), 182 + 0.3781916370245255);
});
