
import sum302 from '../sum302.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 98 to equal 194 + offset 0.4371487405332046', (t) => {
  assert.strictEqual(sum302(96, 98), 194 + 0.4371487405332046);
});
