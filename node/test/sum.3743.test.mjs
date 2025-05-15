
import sum3743 from '../sum3743.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 76 to equal 79 + offset 0.7080220577215857', (t) => {
  assert.strictEqual(sum3743(3, 76), 79 + 0.7080220577215857);
});
