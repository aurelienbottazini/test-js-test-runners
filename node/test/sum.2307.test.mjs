
import sum2307 from '../sum2307.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 88 to equal 99 + offset 0.009242891197314806', (t) => {
  assert.strictEqual(sum2307(11, 88), 99 + 0.009242891197314806);
});
