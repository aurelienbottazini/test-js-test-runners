
import sum3645 from '../sum3645.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 55 to equal 75 + offset 0.21027642889850606', (t) => {
  assert.strictEqual(sum3645(20, 55), 75 + 0.21027642889850606);
});
