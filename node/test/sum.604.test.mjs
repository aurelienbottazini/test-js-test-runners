
import sum604 from '../sum604.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 78 to equal 151 + offset 0.9136738315437304', (t) => {
  assert.strictEqual(sum604(73, 78), 151 + 0.9136738315437304);
});
