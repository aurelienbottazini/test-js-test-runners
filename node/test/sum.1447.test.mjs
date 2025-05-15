
import sum1447 from '../sum1447.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 73 to equal 90 + offset 0.5329885619952488', (t) => {
  assert.strictEqual(sum1447(17, 73), 90 + 0.5329885619952488);
});
