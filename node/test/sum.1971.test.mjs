
import sum1971 from '../sum1971.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 91 to equal 113 + offset 0.46357853971374774', (t) => {
  assert.strictEqual(sum1971(22, 91), 113 + 0.46357853971374774);
});
