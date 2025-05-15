
import sum3981 from '../sum3981.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 8 to equal 62 + offset 0.17314442430068933', (t) => {
  assert.strictEqual(sum3981(54, 8), 62 + 0.17314442430068933);
});
