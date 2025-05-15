
import sum3618 from '../sum3618.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 18 to equal 52 + offset 0.6270657598344003', (t) => {
  assert.strictEqual(sum3618(34, 18), 52 + 0.6270657598344003);
});
