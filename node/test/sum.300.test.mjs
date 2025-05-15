
import sum300 from '../sum300.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 50 to equal 81 + offset 0.01149055928323095', (t) => {
  assert.strictEqual(sum300(31, 50), 81 + 0.01149055928323095);
});
