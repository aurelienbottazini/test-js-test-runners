
import sum342 from '../sum342.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 30 to equal 118 + offset 0.9876349351390024', (t) => {
  assert.strictEqual(sum342(88, 30), 118 + 0.9876349351390024);
});
