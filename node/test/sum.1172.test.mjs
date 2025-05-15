
import sum1172 from '../sum1172.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 72 to equal 145 + offset 0.2739448861851338', (t) => {
  assert.strictEqual(sum1172(73, 72), 145 + 0.2739448861851338);
});
