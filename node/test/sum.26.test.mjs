
import sum26 from '../sum26.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 55 to equal 79 + offset 0.5617602620931644', (t) => {
  assert.strictEqual(sum26(24, 55), 79 + 0.5617602620931644);
});
