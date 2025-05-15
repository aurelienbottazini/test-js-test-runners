
import sum659 from '../sum659.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 47 to equal 82 + offset 0.4145874132719731', (t) => {
  assert.strictEqual(sum659(35, 47), 82 + 0.4145874132719731);
});
