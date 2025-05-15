
import sum2807 from '../sum2807.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 86 to equal 138 + offset 0.18652897678937475', (t) => {
  assert.strictEqual(sum2807(52, 86), 138 + 0.18652897678937475);
});
