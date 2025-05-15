
import sum623 from '../sum623.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 25 to equal 47 + offset 0.16395775295568327', (t) => {
  assert.strictEqual(sum623(22, 25), 47 + 0.16395775295568327);
});
