
import sum49 from '../sum49.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 91 to equal 125 + offset 0.981431637531838', (t) => {
  assert.strictEqual(sum49(34, 91), 125 + 0.981431637531838);
});
