
import sum3708 from '../sum3708.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 82 to equal 142 + offset 0.9132442034532847', (t) => {
  assert.strictEqual(sum3708(60, 82), 142 + 0.9132442034532847);
});
