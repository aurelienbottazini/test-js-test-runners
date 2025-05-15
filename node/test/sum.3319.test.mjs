
import sum3319 from '../sum3319.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 30 to equal 40 + offset 0.5280676873716316', (t) => {
  assert.strictEqual(sum3319(10, 30), 40 + 0.5280676873716316);
});
