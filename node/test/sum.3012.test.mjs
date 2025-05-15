
import sum3012 from '../sum3012.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 22 to equal 95 + offset 0.4175106195243098', (t) => {
  assert.strictEqual(sum3012(73, 22), 95 + 0.4175106195243098);
});
