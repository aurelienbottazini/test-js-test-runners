
import sum395 from '../sum395.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 92 to equal 188 + offset 0.9849418289121061', (t) => {
  assert.strictEqual(sum395(96, 92), 188 + 0.9849418289121061);
});
