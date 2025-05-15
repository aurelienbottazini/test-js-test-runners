
import sum3108 from '../sum3108.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 16 to equal 93 + offset 0.7812290395889905', (t) => {
  assert.strictEqual(sum3108(77, 16), 93 + 0.7812290395889905);
});
