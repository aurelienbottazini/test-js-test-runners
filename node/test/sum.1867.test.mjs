
import sum1867 from '../sum1867.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 52 to equal 145 + offset 0.21806220684467348', (t) => {
  assert.strictEqual(sum1867(93, 52), 145 + 0.21806220684467348);
});
