
import sum2728 from '../sum2728.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 91 to equal 131 + offset 0.4743095582436707', (t) => {
  assert.strictEqual(sum2728(40, 91), 131 + 0.4743095582436707);
});
