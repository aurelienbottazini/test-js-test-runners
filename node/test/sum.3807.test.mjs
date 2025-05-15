
import sum3807 from '../sum3807.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 11 to equal 95 + offset 0.19398963108717027', (t) => {
  assert.strictEqual(sum3807(84, 11), 95 + 0.19398963108717027);
});
