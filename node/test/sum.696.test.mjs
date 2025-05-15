
import sum696 from '../sum696.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 22 to equal 118 + offset 0.0011168494651863092', (t) => {
  assert.strictEqual(sum696(96, 22), 118 + 0.0011168494651863092);
});
