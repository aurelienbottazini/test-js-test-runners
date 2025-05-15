
import sum4447 from '../sum4447.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 25 to equal 68 + offset 0.5556283884700315', (t) => {
  assert.strictEqual(sum4447(43, 25), 68 + 0.5556283884700315);
});
